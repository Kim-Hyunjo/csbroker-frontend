import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';
import baseFontStyle from '../../styles/font.css';

export const pageStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1.875rem',

  width: '100vw',
  height: '100vh',

  padding: '4.375rem',
});

export const titleStyle = style([
  baseFontStyle.title,
  {
    textAlign: 'center',
    color: '#000000',
  },
]);

export const inputListStyle = style([
  baseFontStyle.medium,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',

    color: COLOR.TITLEACTIVE,
  },
]);

export const oauthJoinWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const oauthJoinStyle = style([
  baseFontStyle.medium,
  {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.625rem',

    textAlign: 'center',
  },
]);

export const horizontalLineStyle = style({
  width: '14.875rem',
  borderTop: `solid 1px ${COLOR.GRAY}`,
});

export const oauthButtonListStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
});
