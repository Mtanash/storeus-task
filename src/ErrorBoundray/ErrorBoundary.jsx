import PropTypes from "prop-types";
import { Component } from "react";
import styles from "./ErrorBoundary.module.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className={styles.errorBoundray}>
          <h2>Something went wrong.</h2>
          <p className={styles.errorBoundrayMessage}>
            Try to reload the page. Or go back to the <a href="/">home page</a>.
          </p>

          <p className={styles.errorBoundrayMessage}>
            If the problem persists, please{" "}
            <a href="mailto:mohamedtanash104@gmail.com">contact support</a>.
          </p>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
