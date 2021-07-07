import React from 'react';
import NotFound from '../../../components/NotFound/NotFound';
import { render } from '../../../utils/test.utils';

describe('Given a MovieDetails component', () => {
    test('Then at least one list-item NotFound be rendered', () => {
        const  {container}  = render(<NotFound />);
        const chooseTag = container.querySelector('.notFound-container');
        expect(chooseTag).toBeDefined();
       });
});