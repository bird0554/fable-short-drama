export type SubscriptionPlan = 'monthly' | 'annual';
export type PaymentMethod = 'visa' | 'mastercard' | 'wechat' | 'alipay';
export type VipOrderStatus = 'paid' | 'pending';

export type VipOrderRequest = {
  email: string;
  plan: SubscriptionPlan;
  paymentMethod: PaymentMethod;
  locale: string;
};

export type VipOrder = VipOrderRequest & {
  orderId: string;
  tier: 'vip';
  status: VipOrderStatus;
  createdAt: string;
  activatedAt: string;
};

export const vipApiContract = {
  register: 'POST /api/vip/register',
  createOrder: 'POST /api/vip/orders',
  payOrder: 'POST /api/vip/orders/:orderId/pay',
} as const;

const DEMO_ORDERS_KEY = 'fable-demo-vip-orders';

function readOrders(): VipOrder[] {
  try {
    const stored = JSON.parse(localStorage.getItem(DEMO_ORDERS_KEY) || '[]');
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

/**
 * Local adapter for the membership UI. Replace this function with a server
 * request when the authentication and payment services are connected.
 */
export async function createVipOrder(request: VipOrderRequest): Promise<VipOrder> {
  const now = new Date().toISOString();
  const order: VipOrder = {
    ...request,
    orderId: `FBL-${Date.now().toString(36).toUpperCase()}`,
    tier: 'vip',
    status: 'paid',
    createdAt: now,
    activatedAt: now,
  };
  localStorage.setItem(DEMO_ORDERS_KEY, JSON.stringify([order, ...readOrders()].slice(0, 20)));
  return order;
}
