import { ICommandBarItemProps, IContextualMenuItem } from "@fluentui/react";

type OnClickSettingsIcon = ((ev?: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement> | undefined, item?: IContextualMenuItem | undefined) => boolean | void) | undefined;

export const getSettingsCommandBarItem = (displayText: string, onClickSettingsIcon?: OnClickSettingsIcon): ICommandBarItemProps => {
    return (
        {
            key: 'Open Settings',
            text: displayText,
            iconProps: { iconName: 'Settings' },
            onClick: onClickSettingsIcon,
        }
    )
}