import styled from 'styled-components'

export const Main = styled.main`
  @keyframes slowZoom {
    from {
      transform: scale(1.02);
    }
    to {
      transform: scale(1.12);
    }
  }

  width: 100%;
  padding: 3rem 0;

  .container {
    width: 100%;
    padding: 0 0.75rem;
    margin: 0 auto;
  }

  .title {
    margin-bottom: 3rem;

    h1 {
      text-align: center;
      font-weight: 700;
      font-size: calc(1.275rem + 0.3vw);
    }
  }

  .carousel {
    position: relative;
    overflow: hidden;
    border-radius: 24px;
    background: black;
  }

  .carouselViewport {
    position: relative;
    overflow: hidden;
    height: 600px;
  }

  .carouselTrack {
    display: flex;
    height: 100%;
    transform: translateZ(0);
    will-change: transform;
    position: relative;
    z-index: 1;
  }

  .carouselItem {
    flex-shrink: 0;
    height: 100%;
    overflow: hidden;
  }

  .carouselItem .imageMotion {
    width: 100%;
    height: 100%;
    will-change: transform;
  }

  .carouselItem img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    will-change: transform;
    pointer-events: none;
    transform: scale(1.02);
  }

  .carouselItem.active img {
    animation: slowZoom 5.5s ease-out forwards;
  }

  .carouselItem:not(.active) img {
    animation: none;
  }

  .gestureLayer {
    position: absolute;
    inset: 0;
    z-index: 5;
    cursor: grab;
    touch-action: pan-y;
    user-select: none;
    background: transparent;
  }

  .carousel.dragging .gestureLayer {
    cursor: grabbing;
  }

  .navArea {
    position: absolute;
    top: 0;
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    font-size: 40px;
    color: white;
    opacity: 0.8;
    user-select: none;
    transition: opacity 0.2s ease;
  }

  .carousel.dragging .navArea {
    opacity: 0;
    pointer-events: none;
  }

  .navArea.left {
    left: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.1), transparent);
  }

  .navArea.right {
    right: 0;
    background: linear-gradient(to left, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.1), transparent);
  }

  .indicators {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.7rem;
    z-index: 20;
    pointer-events: none;
  }

  .indicators button {
    width: 60px;
    height: 4px;
    border: none;
    background: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    transition: all 0.3s ease;
    pointer-events: auto;
  }

  .indicators button.active {
    background: white;
  }

  @media (max-width: ${(props) => props.theme.screenMedias.md}) {
    .carouselViewport {
      height: 350px;
    }

    .navArea {
      display: none;
    }
  }
`
