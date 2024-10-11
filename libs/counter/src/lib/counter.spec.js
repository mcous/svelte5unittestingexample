import Counter from './counter.svelte';
import { render } from '@testing-library/svelte';

describe('counter', () => {
  console.log(render(Counter));
});
