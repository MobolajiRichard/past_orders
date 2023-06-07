import Svg, { Path } from "react-native-svg";

export default function Home({color}) {
  return (
    <Svg
      width="25"
      height="28"
      viewBox="0 0 25 28"
      fill="none"
    >
      <Path
        d="M11.0831 1.13928C11.466 0.772174 11.973 0.567627 12.5 0.567627C13.027 0.567627 13.534 0.772174 13.9169 1.13928L23.9077 10.7156C24.5264 11.3074 24.875 12.1335 24.875 12.9951V24.6439C24.875 25.4759 24.5491 26.2738 23.9689 26.8621C23.3887 27.4504 22.6018 27.7809 21.7812 27.7809H17.6562C17.2498 27.7809 16.8473 27.6997 16.4718 27.542C16.0964 27.3842 15.7552 27.1529 15.4679 26.8614C15.1806 26.5699 14.9528 26.2238 14.7974 25.843C14.6421 25.4621 14.5622 25.054 14.5625 24.6418V19.4135C14.5625 19.1361 14.4539 18.8702 14.2605 18.6741C14.0671 18.478 13.8048 18.3678 13.5312 18.3678H11.4688C11.1952 18.3678 10.9329 18.478 10.7395 18.6741C10.5461 18.8702 10.4375 19.1361 10.4375 19.4135V24.6418C10.4375 25.4738 10.1116 26.2717 9.53136 26.86C8.95117 27.4483 8.16426 27.7789 7.34375 27.7789H3.21875C2.39824 27.7789 1.61133 27.4483 1.03114 26.86C0.450948 26.2717 0.125 25.4738 0.125 24.6418V12.993C0.125 12.1314 0.475625 11.3053 1.09438 10.7135L11.0831 1.1351V1.13928ZM12.5 2.6576L2.50925 12.236C2.40783 12.3335 2.327 12.4508 2.27169 12.581C2.21638 12.7111 2.18774 12.8513 2.1875 12.993V24.6418C2.1875 24.9192 2.29615 25.1851 2.48955 25.3812C2.68294 25.5773 2.94525 25.6875 3.21875 25.6875H7.34375C7.61725 25.6875 7.87956 25.5773 8.07295 25.3812C8.26635 25.1851 8.375 24.9192 8.375 24.6418V19.4135C8.375 18.5815 8.70095 17.7836 9.28114 17.1953C9.86133 16.607 10.6482 16.2764 11.4688 16.2764H13.5312C14.3518 16.2764 15.1387 16.607 15.7189 17.1953C16.2991 17.7836 16.625 18.5815 16.625 19.4135V24.6418C16.625 24.9192 16.7336 25.1851 16.927 25.3812C17.1204 25.5773 17.3827 25.6875 17.6562 25.6875H21.7812C22.0548 25.6875 22.3171 25.5773 22.5105 25.3812C22.7039 25.1851 22.8125 24.9192 22.8125 24.6418V12.993C22.8125 12.851 22.784 12.7104 22.7287 12.5799C22.6734 12.4493 22.5924 12.3316 22.4907 12.2339L12.5 2.6576Z"
        fill={color}
      />
    </Svg>
  );
}
