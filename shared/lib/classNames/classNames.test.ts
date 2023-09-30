import { classNames } from './classNames';

describe('classNames', () => {
	const expected = 'someClass';
	test('With one single parameter', () => {
		expect(classNames('someClass')).toBe(expected);
	});

	test('With additional parameters', () => {
		const expected = 'someClass class1 class2 class3';
		expect(
			classNames('someClass', {}, ['class1', 'class2', 'class3'])
		).toBe(expected);
	});

	test('With additional parameters & mods', () => {
		const expected = 'someClass class1 class2 class3 hovered scrollable';
		expect(
			classNames('someClass', { hovered: true, scrollable: true }, [
				'class1',
				'class2',
				'class3',
			])
		).toBe(expected);
	});

	test('With additional parameters & mods false', () => {
		const expected = 'someClass class1 class2 class3 hovered';
		expect(
			classNames('someClass', { hovered: true, scrollable: false }, [
				'class1',
				'class2',
				'class3',
			])
		).toBe(expected);
	});
});
