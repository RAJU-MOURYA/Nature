function submitRating() {
    // Get the selected rating value
    var rating = document.querySelector('input[name="rating"]:checked');
    
    if (rating) {
      alert('You rated ' + rating.value + ' stars!');
      // Here you can handle the rating submission, e.g., send it to the server.
    } else {
      alert('Please select a rating.');
    }
  }
  