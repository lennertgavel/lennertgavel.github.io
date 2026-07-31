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
    intro: `<p>I'm a creative professional with a passion for visual storytelling — spanning lettering, illustration, and code. This portfolio is an exploration of those disciplines and the places where they intersect.</p>
<p>I believe good design lives at the intersection of craft and intent. Whether I'm drawing letterforms by hand or architecting a web component, I bring the same attention to detail and curiosity to the work.</p>
<p>Take a look around — each divider opens onto a different corner of the practice.</p>`,
  },
  {
    slug: 'lettering',
    label: 'Lettering',
    color: '#3E6DB3',
    accent: '#E9A13B',
    indent: 6,
    activeIndent: 1,
    lead: 'I like drawing letters',
    intro: `<p>Hand-crafted letterforms, typographic compositions, and experimental scripts. Each piece begins as a sketch and evolves through layers of refinement into something that is both legible and expressive.</p>
<p>Lettering is the art of drawing letters for a specific purpose — it lives outside the rules of type design and thrives on personality, context, and intention.</p>
<p>The work below moves between disciplined structure and loose, gestural experiments.</p>`,
  },
  {
    slug: 'drawing',
    label: 'Drawing',
    color: '#B23A2E',
    accent: '#93a3bb',    
    indent: 1.1,
    activeIndent: 0.35,
    lead: 'I like drawing',
    intro: `<p>Illustrations, figure studies, and observational sketches. Drawing is the foundation of everything — a direct line between idea and page, thought and mark.</p>
<p>These works range from quick studies to finished pieces and reflect an ongoing practice of seeing, observing, and interpreting the world through line and form.</p>
<p>Every image starts the same way: a pencil, a surface, and the willingness to get it wrong first.</p>`,
  },
  {
    slug: 'coding',
    label: 'Coding',
    color: '#3E8F4E',
    accent: '#233d64',
    indent: 7,
    activeIndent: 1.5,
    lead: 'I like building things',
    intro: `<p>Web components, interactive tools, and open-source contributions. Code, like lettering, is a craft — it rewards precision, benefits from iteration, and works best when the underlying structure is sound.</p>
<p>Projects here lean toward the visual and interface-oriented — experiments in interaction, animation, and the expressive potential of the browser as a medium.</p>
<p>Framework-agnostic by default, and always built on top of the web platform.</p>`,
  },
];
