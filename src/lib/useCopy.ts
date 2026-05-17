"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useCopy(text: string, resetMs = 2000) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), resetMs);
    } catch {
      window.location.href = `mailto:${text}`;
    }
  }, [text, resetMs]);

  return { copied, copy };
}
