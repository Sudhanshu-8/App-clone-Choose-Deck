import * as RNIap from 'react-native-iap';
import { useEffect, useState } from 'react';

// Define product IDs for subscriptions (as per the app stores)
const itemSkus = ['your_subscription_product_id'];

export const useIAP = () => {
  const [products, setProducts] = useState([]);
  const [subscription, setSubscription] = useState(null);

  // Initialize the connection to the store
  useEffect(() => {
    const initIAPConnection = async () => {
      try {
        const result = await RNIap.initConnection();
        console.log('IAP Connection', result);
        await getSubscriptions();
      } catch (error) {
        console.warn('IAP Connection Error', error);
      }
    };
    initIAPConnection();

    return () => {
      RNIap.endConnection();
    };
  }, []);

  // Fetch available subscriptions
  const getSubscriptions = async () => {
    try {
      const products = await RNIap.getSubscriptions(itemSkus);
      setProducts(products);
      console.log('Available Subscriptions:', products);
    } catch (error) {
      console.warn('Failed to fetch subscriptions', error);
    }
  };

  // Purchase the subscription
  const requestSubscription = async (sku) => {
    try {
      const purchase = await RNIap.requestSubscription(sku);
      console.log('Purchase', purchase);
      setSubscription(purchase);
    } catch (error) {
      console.warn('Subscription Error', error);
    }
  };

  return { products, requestSubscription };
};
