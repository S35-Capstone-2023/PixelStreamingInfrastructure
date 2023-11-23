// Copyright Epic Games, Inc. All Rights Reserved.

/**
 * BackToDashboard icon that can be clicked.
 */
export class BackToDashboardIcon {
    _rootElement: HTMLButtonElement;
    _backToDashboardIcon: SVGElement;
    _tooltipText: HTMLElement;

    /**
     * Get the the button containing the settings icon.
     */
    public get rootElement(): HTMLButtonElement {
        if (!this._rootElement) {
            this._rootElement = document.createElement('button');
            this._rootElement.type = 'button';
            this._rootElement.classList.add('UiTool');
            this._rootElement.id = 'backToDashboardBtn';
            this._rootElement.appendChild(this.backToDashboardIcon);
            this._rootElement.appendChild(this.tooltipText);
        }
        return this._rootElement;
    }

    public get tooltipText(): HTMLElement {
        if (!this._tooltipText) {
            this._tooltipText = document.createElement('span');
            this._tooltipText.classList.add('tooltiptext');
            this._tooltipText.innerHTML = 'Back to dashboard';
        }
        return this._tooltipText;
    }

    public get backToDashboardIcon(): SVGElement {
        if (!this._backToDashboardIcon) {
            this._backToDashboardIcon = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'svg'
            );
            this._backToDashboardIcon.setAttributeNS(
                null,
                'id',
                'backToDashboardIcon'
            );
            this._backToDashboardIcon.setAttributeNS(null, 'x', '0px');
            this._backToDashboardIcon.setAttributeNS(null, 'y', '0px');
            this._backToDashboardIcon.setAttributeNS(
                null,
                'viewBox',
                '-1.6 -1.6 29.88 29.88'
            );

            // create svg group for the paths
            const svgGroup = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'g'
            );
            svgGroup.classList.add('svgIcon');
            this._backToDashboardIcon.appendChild(svgGroup);

            // create paths for the icon itself, the inner and out path of a cog
            const path1 = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'path'
            );
            path1.setAttributeNS(
                null,
                'd',
                'M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59 c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815 C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029 c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562 C26.18,21.891,26.141,21.891,26.105,21.891z'
            );

            // const path2 = document.createElementNS(
            //     'http://www.w3.org/2000/svg',
            //     'path'
            // );
            // path2.setAttributeNS(
            //     null,
            //     'd',
            //     'M239.4,136.001c-57,0-103.3,46.3-103.3,103.3s46.3,103.3,103.3,103.3s103.3-46.3,103.3-103.3S296.4,136.001,239.4,136.001z M239.4,315.601c-42.1,0-76.3-34.2-76.3-76.3s34.2-76.3,76.3-76.3s76.3,34.2,76.3,76.3S281.5,315.601,239.4,315.601z'
            // );

            svgGroup.appendChild(path1);
            // svgGroup.appendChild(path2);
        }
        return this._backToDashboardIcon;
    }
}
