import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

/**
 * /uses — the tools, services and hardware I reach for every day.
 *
 * Format follows uses.tech (Brian Lovin's convention): grouped by
 * category, two-column on desktop, one column on mobile. Each item
 * gets a brief 1-line "why" so the list reads like annotations,
 * not just a catalog.
 *
 * Anchor: #uses — added to the Header nav so visitors can find it.
 */
type UseCategory = {
  titleKey: string;
  items: readonly { name: string; noteKey: string }[];
};

const USES: readonly UseCategory[] = [
  {
    titleKey: 'uses.editor',
    items: [
      { name: 'VS Code', noteKey: 'uses.editorVscode' },
      { name: 'Vim (keybindings only)', noteKey: 'uses.editorVim' },
    ],
  },
  {
    titleKey: 'uses.terminal',
    items: [
      { name: 'Windows Terminal + PowerShell 7', noteKey: 'uses.terminalWindows' },
      { name: 'tmux + zsh (on remote boxes)', noteKey: 'uses.terminalTmux' },
    ],
  },
  {
    titleKey: 'uses.runtime',
    items: [
      { name: 'Node.js 20 LTS', noteKey: 'uses.runtimeNode' },
      { name: 'pnpm', noteKey: 'uses.runtimePnpm' },
      { name: 'Java 21 LTS', noteKey: 'uses.runtimeJava' },
      { name: 'PHP 8.2', noteKey: 'uses.runtimePhp' },
      { name: 'Python 3.12', noteKey: 'uses.runtimePython' },
    ],
  },
  {
    titleKey: 'uses.testing',
    items: [
      { name: 'Playwright', noteKey: 'uses.testingPlaywright' },
      { name: 'Cypress', noteKey: 'uses.testingCypress' },
      { name: 'Postman + Newman', noteKey: 'uses.testingPostman' },
    ],
  },
  {
    titleKey: 'uses.cloud',
    items: [
      { name: 'GitHub Actions', noteKey: 'uses.cloudActions' },
      { name: 'Docker + Docker Compose', noteKey: 'uses.cloudDocker' },
      { name: 'LocalStack (offline Lambda)', noteKey: 'uses.cloudLocalstack' },
    ],
  },
  {
    titleKey: 'uses.ai',
    items: [
      { name: 'GitHub Copilot (autocomplete + chat)', noteKey: 'uses.aiCopilot' },
      { name: 'Claude + Gemini (architectural review)', noteKey: 'uses.aiReview' },
      { name: 'Gentle-AI + Kimi K2 + DeepSeek (planning orchestrators)', noteKey: 'uses.aiOrchestrators' },
    ],
  },
  {
    titleKey: 'uses.productivity',
    items: [
      { name: 'Linear', noteKey: 'uses.productivityLinear' },
      { name: 'Notion', noteKey: 'uses.productivityNotion' },
      { name: 'Obsidian', noteKey: 'uses.productivityObsidian' },
    ],
  },
  {
    titleKey: 'uses.hardware',
    items: [
      { name: 'Laptop: Dell Inspiron 16 Plus', noteKey: 'uses.hardwareLaptop' },
      { name: 'Keyboard: Logitech MX Keys', noteKey: 'uses.hardwareKeyboard' },
      { name: 'Mouse: Logitech MX Master 3S', noteKey: 'uses.hardwareMouse' },
      { name: 'Headphones: Sony WH-1000XM5', noteKey: 'uses.hardwareHeadphones' },
    ],
  },
];

export function Uses(): JSX.Element {
  const { t } = useTranslation();
  return (
    <section
      id="uses"
      aria-labelledby="uses-heading"
      className="relative border-b border-current/15 bg-[var(--bg-page)] px-4 py-20 sm:px-6 lg:px-8"
    >
      <Container>
        <SectionHeading
          titleKey="uses.title"
          subtitleKey="uses.subtitle"
          sectionKey="uses"
        />

        <Reveal as="ul" className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
          {USES.map((cat) => (
            <li key={cat.titleKey}>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                $ ls {cat.titleKey.replace('uses.', '')}
              </h3>
              <ul className="space-y-2 font-mono text-sm">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-3 border-b border-dashed border-current/10 pb-1.5"
                  >
                    <span className="text-[var(--fg-page)]">{item.name}</span>
                    <span className="text-right text-xs text-[var(--muted)]">
                      {t(item.noteKey)}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </Reveal>

        <p className="mt-12 font-mono text-xs text-[var(--muted)]">
          {t('uses.footer')}
        </p>
      </Container>
    </section>
  );
}