import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alert.message}</strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}
