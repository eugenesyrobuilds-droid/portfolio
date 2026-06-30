"use client";

import { useEffect, useId, useRef, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Maximize2, Minus, Plus, RotateCcw, X } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleContext";

type Props = {
  code: string;
  caption?: string;
  height?: number;
};

export default function MermaidDiagram({ code, caption, height = 560 }: Props) {
  const { locale } = useLocale();
  const reactId = useId();
  const renderId = `mermaid-${reactId.replace(/[^a-zA-Z0-9-]/g, "")}`;
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [fullscreen, setFullscreen] = useState(false);
  const cleanCode = useRef(code);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          fontFamily: "Inter, system-ui, sans-serif",
          themeVariables: {
            fontFamily: "Inter, system-ui, sans-serif",
            primaryColor: "#EAF0EC",
            primaryTextColor: "#181818",
            primaryBorderColor: "#3D6B57",
            lineColor: "#3D6B57",
            tertiaryColor: "#F4F7F2",
          },
          flowchart: {
            useMaxWidth: false,
            htmlLabels: true,
            curve: "basis",
          },
        });
        const { svg: out } = await mermaid.render(renderId, cleanCode.current);
        if (!cancelled) setSvg(out);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [renderId]);

  useEffect(() => {
    if (!fullscreen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [fullscreen]);

  const labels = {
    loading: locale === "uk" ? "Завантаження діаграми…" : "Loading diagram…",
    failed:
      locale === "uk"
        ? "Не вдалося відрендерити діаграму"
        : "Failed to render diagram",
    zoomIn: locale === "uk" ? "Збільшити" : "Zoom in",
    zoomOut: locale === "uk" ? "Зменшити" : "Zoom out",
    reset: locale === "uk" ? "Скинути" : "Reset",
    fullscreen: locale === "uk" ? "На весь екран" : "Fullscreen",
    close: locale === "uk" ? "Закрити" : "Close",
    hint:
      locale === "uk"
        ? "Перетягуйте для панорамування · колесо/щіпок для зуму · подвійний клік — скидання"
        : "Drag to pan · scroll/pinch to zoom · double-click to reset",
  };

  if (error) {
    return (
      <p className="not-prose my-6 text-small text-warning-500">
        {labels.failed}: {error}
      </p>
    );
  }

  const renderViewport = (h: number, modal: boolean) => (
    <div
      className={`relative bg-paper ${modal ? "" : "rounded-card shadow-card"} overflow-hidden`}
      style={{ height: h }}
    >
      {!svg && (
        <div className="absolute inset-0 flex items-center justify-center text-small text-ink-500">
          {labels.loading}
        </div>
      )}
      {svg && (
        <TransformWrapper
          initialScale={1}
          minScale={0.2}
          maxScale={5}
          centerOnInit
          limitToBounds={false}
          wheel={{ step: 0.12 }}
          doubleClick={{ mode: "reset" }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <div className="absolute top-3 right-3 z-10 flex gap-1 rounded-pill bg-paper/90 backdrop-blur border border-accent-border shadow-soft p-1">
                <button
                  type="button"
                  aria-label={labels.zoomIn}
                  title={labels.zoomIn}
                  onClick={() => zoomIn()}
                  className="p-2 rounded-full hover:bg-accent-50 text-ink-700"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label={labels.zoomOut}
                  title={labels.zoomOut}
                  onClick={() => zoomOut()}
                  className="p-2 rounded-full hover:bg-accent-50 text-ink-700"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label={labels.reset}
                  title={labels.reset}
                  onClick={() => resetTransform()}
                  className="p-2 rounded-full hover:bg-accent-50 text-ink-700"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                {!modal && (
                  <button
                    type="button"
                    aria-label={labels.fullscreen}
                    title={labels.fullscreen}
                    onClick={() => setFullscreen(true)}
                    className="p-2 rounded-full hover:bg-accent-50 text-ink-700"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                )}
                {modal && (
                  <button
                    type="button"
                    aria-label={labels.close}
                    title={labels.close}
                    onClick={() => setFullscreen(false)}
                    className="p-2 rounded-full hover:bg-accent-50 text-ink-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <TransformComponent
                wrapperStyle={{ width: "100%", height: "100%" }}
                contentStyle={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  className="[&_svg]:max-w-none"
                  dangerouslySetInnerHTML={{ __html: svg }}
                />
              </TransformComponent>
              <p className="absolute bottom-3 left-3 z-10 text-[0.65rem] uppercase tracking-wider text-ink-400 bg-paper/80 rounded-pill px-3 py-1 border border-accent-border">
                {labels.hint}
              </p>
            </>
          )}
        </TransformWrapper>
      )}
    </div>
  );

  return (
    <>
      <figure className="not-prose my-10">
        {renderViewport(height, false)}
        {caption && (
          <figcaption className="text-small text-ink-500 mt-2 text-center">
            {caption}
          </figcaption>
        )}
      </figure>

      {fullscreen && (
        <div className="fixed inset-0 z-[200] bg-paper p-4 sm:p-8">
          {renderViewport(
            typeof window !== "undefined" ? window.innerHeight - 64 : 800,
            true,
          )}
        </div>
      )}
    </>
  );
}
