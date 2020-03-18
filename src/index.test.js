/*
 * Copyright (c) 2019 by Marfeel Solutions (http://www.marfeel.com)
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Marfeel Solutions S.L and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Marfeel Solutions S.L and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Marfeel Solutions SL.
 */

import Giraff from '.';

describe('Giraff', () => {
	let marfeelMock,
	giraffAttributes,
	giraff;

    beforeEach(() => {
        giraffAttributes = {
            blockName: 'fakeBlock',
            widgetId: 'fakeWidget',
            serverName: 'testserverName',
        };

        marfeelMock = {
            scripts: {
                installScriptInNode: jest.fn(() => Promise.resolve())
            }
        };
	});
	
    describe('define()', () => {
        test('returns the expected ad markup', () => {
            giraff = new Giraff(giraffAttributes, marfeelMock);
			return giraff.define().then(markup => {
				expect(markup).toBe('<div id="grf_fakeBlock_fakeWidget"></div>');
            });
        });
    });
});
