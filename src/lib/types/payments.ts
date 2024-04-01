
/**
 * Specific feature of a plan
 */
export type PlanFeature = {
    label: string;
    isAvailable?: boolean;
}

/**
 * Data for a pricing plan
 */
export type PlanData = {
    id: string;
    name: string;
    price: number;
    priceId: string;
    features: PlanFeature[];
    isPopular?: boolean;
}