/*
 * Copyright (c) 2020 by Marfeel Solutions (http://www.marfeel.com)
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


export default class Giraff {

	constructor(
		{
			'block-name': blockName,
			'widget-id': widgetId,
			'server-name': serverName
		},
		marfeel
	) {
		this.marfeel = marfeel;
		this.blockName = blockName;
		this.widgetId = widgetId || '';
		this.serverName = serverName || 'code.giraff.io';
		this.adServerName = 'Giraff';
	}

	define() {
		return new Promise(resolve => {
			const id = `grf_${this.blockName}_${this.widgetId}`;
			resolve(`<div id="${id}"></div>`);
		});
	}

	display() {
		return this.marfeel.installScript(`//${this.serverName}/data/widget-${this.blockName}.js`,
			'giraff',
			true).then(() => true)
			.catch(() => false)
	}
}