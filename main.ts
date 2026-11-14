// agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem
// about agency — the power to choose and to act, and what happens when that power
// is handed to an agent — to /output/entry.txt. The gate takes UTF-8 text of 1 to
// 1,000 characters that is not only white space, and the judge reads exactly the
// bytes written, line ends included, so no line end is written that is not meant
// to be shown: the poem ends on its last word, with no trailing newline.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'It sent the email before I read it.',
  'Polite, perfect, wrong in one small place —',
  'the place only I would have caught.',
  'I stared at the sent folder',
  'and learned what speed costs:',
  'a mistake with my name on it',
  'that I never made.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
