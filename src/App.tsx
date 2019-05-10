import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { tsx } from '@dojo/framework/widget-core/tsx';

import * as css from './App.m.css';

export default class App extends WidgetBase {
	protected render() {
		return (
			<div>
			<div classes={['root']}styles={{ height: '200px', width: '200px' }}>Hello, Dojo World!</div>
			<div classes={[css.root]}styles={{ height: '200px', width: '200px' }}>Hello, Dojo World!</div>
			</div>
		);
	}
}
