// components/common/Sidebar.tsx
import Link from 'next/link';
import React from 'react';
import { Shield, Home, ClipboardList, BookOpen, Users, Settings } from 'lucide-react';

type NavItem = {
  href: string;
  icon: React.ElementType;
  label: string;
};

const navItems: NavItem[] = [
  { href: '/dashboard', icon: Home, label: 'Dashboard' },
  { href: '/exam-tasks', icon: ClipboardList, label: 'Exam Tasks' },
  { href: '/question-bank', icon: BookOpen, label: 'Question Bank' },
  { href: '/teachers', icon: Users, label: 'Teachers' },
  { href: '/settings', icon: Settings, label: 'Settings' },
];

export default function Sidebar(): JSX.Element {
  // Replace this with real router path detection (use next/router or usePathname in app router)
  const activePath = '/dashboard';

  return (
    <aside className="w-64 flex-shrink-0 bg-exam-dark-slate text-white min-h-screen flex flex-col">
      {/* Header / Logo placeholder */}
      <div className="h-16 flex items-center gap-3 px-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div
          className="w-10 h-10 rounded-md flex items-center justify-center bg-exam-soft-blue/10 text-exam-soft-blue"
          aria-hidden="true"
        >
          {/* shield icon tastefully colored */}
          <Shield className="w-5 h-5" />
        </div>

        <div>
          <div className="text-lg font-bold">ExamIQ</div>
          <div className="text-xs text-gray-300">Admin</div>
        </div>

        {/* placeholder for future logo upload */}
        <div className="ml-auto text-xs text-gray-400">Logo</div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4" aria-label="Main Navigation">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = activePath === item.href;
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link href={item.href} legacyBehavior>
                  <a
                    className={`group flex items-center gap-3 p-2 rounded-md transition-colors
                      ${isActive
                        ? 'bg-exam-royal-blue text-white'
                        : 'text-gray-200 hover:bg-exam-soft-blue/10 hover:text-white'}
                      `}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-exam-soft-blue'}`} />
                    <span className="text-sm">{item.label}</span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer / copyright */}
      <div className="p-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <p className="text-sm text-gray-300 text-center">© 2025 ExamIQ</p>
      </div>
    </aside>
  );
}
