import React, { Component } from "react";
import { fetchMoviesReviewsApi } from "../../services/movies-api";
import ReviewsItem from "./ReviewsItem/ReviewsItem";

class Reviews extends Component {
  state = {
    reviews: null,
  };
  componentDidMount() {
    fetchMoviesReviewsApi(this.props.moveiId).then((responce) =>
      this.setState({ reviews: responce.data.results })
    );
  }
  render() {
    const reviews = this.state.reviews;
    return (
      <ul>
        {reviews !== null &&
          reviews.map((el) => <ReviewsItem {...el} key={el.id} />)}
      </ul>
    );
  }
}

export default Reviews;
