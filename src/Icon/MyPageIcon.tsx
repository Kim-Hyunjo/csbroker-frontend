import { IIcon } from '../types/icon';

function MyPageIcon({ fill, width, height }: IIcon) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_58_1608)'>
        <path
          d='M33.4229 29.1667H16.5771C13.8392 29.17 11.2144 30.2591 9.27839 32.1951C7.3424 34.131 6.25331 36.7559 6.25 39.4937V50H43.75V39.4937C43.7467 36.7559 42.6576 34.131 40.7216 32.1951C38.7856 30.2591 36.1608 29.17 33.4229 29.1667Z'
          fill={fill}
        />
        <path
          d='M25 25C31.9036 25 37.5 19.4036 37.5 12.5C37.5 5.59644 31.9036 0 25 0C18.0964 0 12.5 5.59644 12.5 12.5C12.5 19.4036 18.0964 25 25 25Z'
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id='clip0_58_1608'>
          <rect width='50' height='50' fill={fill} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default MyPageIcon;
