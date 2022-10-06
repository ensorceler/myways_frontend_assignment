import React from "react";

interface StyleProps {
  size?: number;
  color?: string;
}

export default function BarometerIcon({ size }: StyleProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 470 470"
      width={size ? size : 470}
      height={size ? size : 470}
      fill="white"
    >
      <path d="M401.17 68.83C356.785 24.444 297.771 0 235 0S113.215 24.444 68.83 68.83C24.444 113.216 0 172.229 0 235s24.444 121.784 68.83 166.17C113.215 445.556 172.229 470 235 470s121.785-24.444 166.17-68.83C445.556 356.784 470 297.771 470 235s-24.444-121.784-68.83-166.17zM235 455c-121.309 0-220-98.691-220-220S113.691 15 235 15s220 98.691 220 220-98.691 220-220 220z" />
      <path d="M235 30C121.962 30 30 121.963 30 235s91.962 205 205 205 205-91.963 205-205S348.038 30 235 30zm0 395c-104.766 0-190-85.233-190-190S130.234 45 235 45s190 85.233 190 190-85.234 190-190 190z" />
      <path d="M369.968 157.838a7.582 7.582 0 0 0-.301-.588 7.78 7.78 0 0 0-.439-.673 156.667 156.667 0 0 0-55.805-55.805 7.41 7.41 0 0 0-.673-.439 7.93 7.93 0 0 0-.587-.301C289.41 86.974 263.062 79.5 235 79.5c-28.063 0-54.412 7.474-77.165 20.534a7.864 7.864 0 0 0-.585.299 7.78 7.78 0 0 0-.673.439 156.667 156.667 0 0 0-55.805 55.805 7.41 7.41 0 0 0-.439.673c-.111.193-.209.39-.301.588C86.974 180.59 79.5 206.938 79.5 235c0 27.312 7.215 54.195 20.873 77.762.385.66 3.967 6.332 11.159 2.183l20.697-11.949a7.5 7.5 0 0 0-7.5-12.99l-14.966 8.641c-8.874-17.413-14.004-36.571-15.052-56.146H112c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5H94.701a139.493 139.493 0 0 1 15.062-56.146l14.966 8.641a7.497 7.497 0 0 0 10.245-2.745 7.5 7.5 0 0 0-2.745-10.245l-14.94-8.625a141.607 141.607 0 0 1 41.09-41.09l8.625 14.939a7.497 7.497 0 0 0 10.245 2.745 7.5 7.5 0 0 0 2.745-10.245l-8.641-14.966a139.488 139.488 0 0 1 56.145-15.062V112c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5V94.701a139.484 139.484 0 0 1 56.145 15.062l-8.641 14.966a7.5 7.5 0 0 0 12.99 7.5l8.625-14.939a141.62 141.62 0 0 1 41.09 41.09l-14.94 8.625a7.5 7.5 0 0 0 7.5 12.99l14.966-8.641a139.505 139.505 0 0 1 15.062 56.146H358c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h17.29a140.619 140.619 0 0 1-15.034 56.156l-14.984-8.651a7.5 7.5 0 0 0-7.5 12.99l21.651 12.5a7.498 7.498 0 0 0 10.243-2.742c13.63-23.58 20.835-50.467 20.835-77.753-.001-28.062-7.475-54.41-20.533-77.162z" />
      <path d="M260.554 189.15a7.498 7.498 0 0 0-10.192 2.904l-11.582 20.769a22.534 22.534 0 0 0-3.78-.324c-12.407 0-22.5 10.094-22.5 22.5 0 1.404.136 2.776.383 4.109l-62.173 35.896a7.5 7.5 0 0 0 7.5 12.99l62.184-35.902a22.394 22.394 0 0 0 14.607 5.407c9.66 0 17.915-6.12 21.098-14.685l23.775.354.114.001a7.5 7.5 0 0 0 7.497-7.376 52.37 52.37 0 0 0-7.018-27.045 52.396 52.396 0 0 0-19.913-19.598zM235 242.5c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5c1.302 0 2.528.335 3.596.921l.054.034c2.297 1.29 3.85 3.738 3.85 6.545 0 .032-.004.064-.005.096-.063 4.101-3.398 7.404-7.495 7.404zm21.317-14.683a22.507 22.507 0 0 0-4.443-7.677l7.571-13.576a37.434 37.434 0 0 1 8.031 9.686 37.456 37.456 0 0 1 4.373 11.799l-15.532-.232zM261.147 375.5h-52.294c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h52.294c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM251.147 360.5c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-32.294c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h32.294z" />
    </svg>
  );
}
