import renderer from '@dojo/framework/widget-core/vdom';
import { tsx } from '@dojo/framework/widget-core/tsx';

const r = renderer(() => <div classes={['root']}styles={{ height: '200px', width: '200px' }}>Hello, Dojo World!</div>);
r.mount();
