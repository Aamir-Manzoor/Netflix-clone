import { PureComponent, ForwardedRef, forwardRef } from "react";

type VideoItemWithHoverPureType = {
  src: string;
  innerRef: ForwardedRef<HTMLDivElement>;
  handleHover: (value: boolean) => void;
};

class VideoItemWithHoverPure extends PureComponent<VideoItemWithHoverPureType> {
  // Use onMouseEnter and onMouseLeave for faster and more reliable hover effects
  handleMouseEnter = () => {
    this.props.handleHover(true);
  };

  handleMouseLeave = () => {
    this.props.handleHover(false);
  };

  render() {
    return (
      <div
        ref={this.props.innerRef}
        style={{
          zIndex: 9,
          cursor: "pointer",
          borderRadius: 4,
          width: "100%",
          position: "relative",
          paddingTop: "calc(9 / 16 * 100%)",
        }}
      >
        <img
          src={this.props.src}
          style={{
            top: 0,
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            borderRadius: "4px",
          }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        />
      </div>
    );
  }
}

const VideoItemWithHoverRef = forwardRef<HTMLDivElement, Omit<VideoItemWithHoverPureType, "innerRef">>(
  (props, ref) => <VideoItemWithHoverPure {...props} innerRef={ref} />
);
VideoItemWithHoverRef.displayName = "VideoItemWithHoverRef";

export default VideoItemWithHoverRef;