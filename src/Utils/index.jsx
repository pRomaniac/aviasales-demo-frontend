export default function ContainerResize() {
  this.setState({ psize: 'mobile' });
  if (document.body.clientWidth >= 768 && document.body.clientWidth < 1440) {
    this.setState({ psize: 'tablet' });
  }
  if (document.body.clientWidth >= 1440) {
    this.setState({ psize: 'desktop' });
  }
  //  this.props["size"] = this.state["sizing"];
  // console.log(document.body.clientWidth);
}
