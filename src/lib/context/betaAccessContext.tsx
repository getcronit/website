import { sq } from '../../api/src';
import { useNotificationsContext } from '@atsnek/jaen';
import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { UserContext } from './userContext';

export type BetaAccessContext = {
  hasBetaAccess: boolean;
  claimBetaAccess: (token?: string) => Promise<boolean>;
};

export const BetaAccessContext = createContext<BetaAccessContext>({
  hasBetaAccess: false,
  claimBetaAccess: async (token?: string) => {
    return true;
  }
});

/**
 * Provider for the beta access context.
 */
const BetaAccessContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [hasBetaAccess, setHasBetaAccess] = useState(false);
  const { fetchTokenCount } = useContext(UserContext);
  const notificationContext = useNotificationsContext();
  // const user = useAuthenticationContext().user;

  const user = {
    id: '',
    primaryEmail: '',
    details: {
      firstName: '',
      lastName: ''
    }
  };

  const checkStatus = async () => {
    const token = localStorage.getItem('beta-access-token');

    if (token) {
      setHasBetaAccess(true);
    }
  };

  const claimBetaAccess = async (token?: string) => {
    if (!user?.id) return false;

    let betaAccessToken = token;
    if (!betaAccessToken) {
      betaAccessToken = await notificationContext.prompt({
        title: 'Beta Access',
        message: 'Enter your beta access token',
        confirmText: 'Access Beta',
        cancelText: 'Cancel'
      });
    }

    if (betaAccessToken) {
      const [claimed, errors] = await sq.mutate(m =>
        m.betaTokenClaim({ userId: user.id, id: betaAccessToken })
      );

      if (errors) {
        notificationContext.toast({
          title: 'Error',
          variant: 'error',
          description: errors[0].message
        });
      }

      if (claimed) {
        localStorage.setItem('beta-access-token', betaAccessToken);
        setHasBetaAccess(true);
        createCustomerRecord();
        fetchTokenCount();
        return true;
      } else {
        notificationContext.toast({
          title: 'Error',
          variant: 'error',
          description: 'Invalid beta access token'
        });
      }
    }
    return false;
  };

  /**
   * Create a customer record for the user.
   * This is used to track all payments and subscriptions for the user.
   */
  const createCustomerRecord = async () => {
    if (!user) return;

    await sq.mutate(m =>
      m.createCustomer({
        userId: user.id,
        name: user.details ? `${user.details.firstName} ${user.details.lastName}` : user.username,
        email: user.primaryEmail
      })
    );
  };

  useEffect(() => {
    checkStatus();
  }, []);

  return (
    <BetaAccessContext.Provider value={{ hasBetaAccess, claimBetaAccess }}>
      {children}
    </BetaAccessContext.Provider>
  );
};

export default BetaAccessContextProvider;
