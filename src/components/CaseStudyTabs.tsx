"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type Props = {
  tabs: Tab[];
  defaultTab?: string;
  paramKey?: string;
};

function TabList({
  tabs,
  active,
  onSelect,
}: {
  tabs: Tab[];
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Case study sections"
      className="not-prose mb-10 inline-flex items-center gap-1 rounded-pill bg-accent-50 p-1"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => onSelect(tab.id)}
            className={`rounded-pill px-5 py-2 text-small font-medium transition-colors ${
              isActive
                ? "bg-paper text-accent-700 shadow-soft"
                : "text-ink-500 hover:text-accent-700"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

function CaseStudyTabsInner({ tabs, defaultTab, paramKey = "tab" }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlTab = searchParams?.get(paramKey);
  const initial =
    (urlTab && tabs.find((t) => t.id === urlTab)?.id) ||
    defaultTab ||
    tabs[0]?.id;

  const [active, setActive] = useState<string>(initial);

  useEffect(() => {
    if (urlTab && urlTab !== active && tabs.some((t) => t.id === urlTab)) {
      setActive(urlTab);
    }
  }, [urlTab, tabs, active]);

  const onSelect = (id: string) => {
    setActive(id);
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    if (id === (defaultTab || tabs[0]?.id)) {
      params.delete(paramKey);
    } else {
      params.set(paramKey, id);
    }
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div>
      <TabList tabs={tabs} active={active} onSelect={onSelect} />
      <div
        key={activeTab.id}
        role="tabpanel"
        id={`tabpanel-${activeTab.id}`}
        aria-labelledby={`tab-${activeTab.id}`}
      >
        {activeTab.content}
      </div>
    </div>
  );
}

function TabsFallback({ tabs, defaultTab }: Props) {
  const initial = defaultTab || tabs[0]?.id;
  const activeTab = tabs.find((t) => t.id === initial) ?? tabs[0];
  return (
    <div>
      <TabList tabs={tabs} active={activeTab.id} onSelect={() => {}} />
      <div>{activeTab.content}</div>
    </div>
  );
}

export default function CaseStudyTabs(props: Props) {
  return (
    <Suspense fallback={<TabsFallback {...props} />}>
      <CaseStudyTabsInner {...props} />
    </Suspense>
  );
}
