"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import toast from "react-hot-toast";

const CartContext = createContext(null);

const CART_KEY = "wcc_shop_cart";
const WISH_KEY = "wcc_shop_wishlist";
const MAX_QTY = 99;

function read(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setItems(read(CART_KEY));
    setWishlist(read(WISH_KEY));
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) write(CART_KEY, items);
  }, [items, ready]);

  useEffect(() => {
    if (ready) write(WISH_KEY, wishlist);
  }, [wishlist, ready]);

  const addItem = useCallback((product, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) {
        return prev.map((i) =>
          i.id === product.id
            ? { ...i, qty: Math.min(i.qty + qty, MAX_QTY) }
            : i,
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image,
          qty,
        },
      ];
    });
    toast.success(`${product.name} added to cart`);
  }, []);

  const updateQty = useCallback((id, qty) => {
    const next = Math.max(1, Math.min(qty, MAX_QTY));
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: next } : i)));
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const toggleWishlist = useCallback(
    (product) => {
      const wished = wishlist.includes(product.id);
      setWishlist((prev) =>
        wished ? prev.filter((id) => id !== product.id) : [...prev, product.id],
      );
      toast.success(wished ? "Removed from wishlist" : "Added to wishlist");
    },
    [wishlist],
  );

  const isWished = useCallback((id) => wishlist.includes(id), [wishlist]);

  const value = useMemo(
    () => ({
      items,
      count: items.reduce((sum, i) => sum + i.qty, 0),
      subtotal: items.reduce((sum, i) => sum + i.price * i.qty, 0),
      addItem,
      updateQty,
      removeItem,
      clearCart,
      toggleWishlist,
      isWished,
    }),
    [items, addItem, updateQty, removeItem, clearCart, toggleWishlist, isWished],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}