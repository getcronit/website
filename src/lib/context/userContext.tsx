import { Subscription } from '@/api/src/schema.generated';
import { sq } from '../../api/src';
import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import { useAuth } from '@atsnek/jaen';

export type UserContext = {
  hasRestrictedAccess: boolean;
  isFormerSubscriber: boolean;
  activeSubscription: Subscription | null;
  tokenCount: number;
  fetchTokenCount: () => void;
  fetchActiveSubscription: () => void;
};

export const UserContext = createContext<UserContext>({
  hasRestrictedAccess: true,
  isFormerSubscriber: false,
  activeSubscription: null,
  tokenCount: 0,
  fetchTokenCount: () => {},
  fetchActiveSubscription: () => {}
});

/**
 * Provider for the user context.
 */
const UserContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isFormerSubscriber, setIsFormerSubscriber] = useState<boolean>(false);
  const [activeSubscription, setActiveSubscription] = useState<Subscription | null>(null);
  const [tokenCount, setTokenCount] = useState<number>(0);
  const [hasRestrictedAccess, setHasRestrictedAccess] = useState<boolean>(true);

  const user = useAuth().user;

  // If the user has an active subscription or is a former subscriber with tokens, they have unrestricted access
  useEffect(() => {
    if (activeSubscription || (isFormerSubscriber && tokenCount > 1)) {
      setHasRestrictedAccess(false);
      console.log('User has unrestricted access');
    }
  }, [tokenCount, activeSubscription, isFormerSubscriber]);

  /**
   * Fetches the token count for the current user.
   */
  const fetchTokenCount = async () => {
    // const tokenCount = await getTokenCount();
    const [token] = await sq.query(q => q.me?.availableTokens);
    setTokenCount(token ?? 0);
  };

  /**
   * Checks the user's subscription status (active, former, or none)
   */
  const checkSubscription = async () => {
    if (!user) return;
    const [subscription, error] = await sq.query(q => {
      const subscription = q.me?.subscription();
      if (!subscription) return;
      return subscription;
    });
    if ((error && error.length > 0) || !subscription) return;

    if (new Date(subscription.stripeCurrentPeriodEnd) < new Date()) {
      // The subscription has ended and thus the user is a former subscriber
      setIsFormerSubscriber(true);
      return;
    }
    setActiveSubscription(subscription);
  };

  useEffect(() => {
    if (!user || tokenCount) return;
    fetchTokenCount();
    checkSubscription();
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        hasRestrictedAccess,
        isFormerSubscriber,
        activeSubscription,
        tokenCount,
        fetchTokenCount,
        fetchActiveSubscription: checkSubscription
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
