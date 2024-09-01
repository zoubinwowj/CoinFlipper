export default function BottomEffect() {
    const gradientStyle = {
      backgroundImage: `radial-gradient(farthest-side at bottom left, #271d3b, transparent 80vw), radial-gradient(farthest-corner at bottom right, #3a233f, transparent 100vw)`,
    };
  
    return (
      <div className="absolute bottom-0 w-full h-[40vh]" style={gradientStyle}></div>
    );
  }
  