import { keyframes } from "styled-components";

const TextAnimation = keyframes`
0% {
    opacity: 0;
    transform: translateY(25%) rotate(180deg) scale(0.5);
}

50% {
    transform: translateY(0), scale(1.1);
    opacity: 1;
}

100% {
    transform: translateY(0) rotate(0deg) scale(1);
}
`;

const fadeIn = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

const fadeOut = keyframes`
0% {
    opacity: 1;
}
100% {
    opacity: 0;
}
`;

export { TextAnimation, fadeIn, fadeOut}
