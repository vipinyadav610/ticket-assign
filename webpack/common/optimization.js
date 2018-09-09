const optimization = () => {
  return {
    splitChunks: {
      name: "vendor",
      chunks: "all"
    }
  };
};
export default optimization();
