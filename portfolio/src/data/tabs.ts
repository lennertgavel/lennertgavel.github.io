export interface Tab {
  slug: string;
  label: string;
  color: string;
  accent: string;
  /** Resting horizontal indent, as a multiplier of the base --indent. Non-uniform on purpose. */
  indent: number;
  /** Horizontal indent when this tab is active, as a multiplier of the base --indent. Lower = more space. */
  activeIndent: number;
  lead: string;
  intro: string;
}

export const SIGNATURE = 'Lennert·Gavel';

export const tabs: Tab[] = [
  {
    slug: 'about-me',
    label: 'About Me',
    color: '#E9A13B',
    accent: '#3E6DB3',
    indent: 0,
    activeIndent: 0,
    lead: "Hello, I'm Lennert",
    intro: `<p>Achieving your goal with minimal effort — that's where the subtle beauty lies. In the refinement of typography, the simplicity of good code, the line work of an illustration. <br /> I work across lettering, illustration, and code — where I bring the same pursuit of elegance to each.</p>
<p>Take a look around — each section holds a different corner of this practice.</p>`,
  },
  {
    slug: 'lettering',
    label: 'Lettering',
    color: '#3E6DB3',
    accent: '#E9A13B',
    indent: 6,
    activeIndent: 1,
    lead: 'I like drawing letters',
    intro: `<p>I can spend an entire day perfecting a single letterform — refining its curves, adjusting its weight, exploring how it breathes on the page.</p>
<p>Each piece explores the space between legibility and freedom of form. Typographic compositions, experimental scripts, hand-drawn forms that live outside the rules of traditional typeface design.</p>
<p>Follow this work on <a href="https://instagram.com/letteringsoup" target="_blank">Instagram @letteringsoup</a></p>`,
  },
  {
    slug: 'drawing',
    label: 'Drawing',
    color: '#B23A2E',
    accent: '#E9A13B',    
    indent: 1.1,
    activeIndent: 0.35,
    lead: 'Drawing is my therapy',
intro: `<p>Running a drawing business for five years made me lose my creative outlet and therapy. To reclaim it, I restructured my life: coding four days a week, leaving one full day just for me.</p>
<p>It took time, but I've found the joy again—sketchbook open, good coffee in hand, drawing purely for myself in a quiet café.</p>
<p>Taking time for drawing has become a cherished ritual again, and for this, <br/ > I am so grateful.</p>`,
  },
  {
    slug: 'coding',
    label: 'Coding',
    color: '#3E8F4E',
    accent: '#E9A13B',
    indent: 7,
    activeIndent: 1.5,
    lead: 'I can lose myself writing code',
    intro: `<p>Good code is elegant — clear, maintainable, and built to last. I focus on visual and interactive experiences on the web: components, tools, and experiments that prioritize the human experience of interaction.</p>
    <p>People call coding uncreative, but I don't buy that for a single second. The beauty of a book starts with fixed dimensions. Websites break that rule entirely. Where most traditional art looks back to recreate history, programming steps straight into uncharted territory.</p>
    <p>Real digital creativity is still barely scratched. Give me that wild, open challenge to tackle every single day.</p>`,
  },
];

const imageFiles = ['image.jpg', 'mdlr-1.jpg', 'mdlr-2.jpg'];

/** Returns ~6 image paths for a tab by repeating the dummy files twice. */
export function getTabImages(slug: string): string[] {
  const base = imageFiles.map((f) => `/${slug}/${f}`);
  return [...base, ...base];
}
