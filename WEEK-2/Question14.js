function Theater(theaterName, location) {
    this.theaterName = theaterName;
    this.location = location;
    this.movies = [];
  
    this.addMovie = function(movieName, showtime, seatCount) {
      this.movies.push({
        movieName: movieName,
        showtime: showtime,
        seatCount: seatCount,
        availableSeats: seatCount
      });
    };
  
    this.reserveSeat = function(movieName, showtime) {
      let movie = this.movies.find(m => m.movieName === movieName && m.showtime === showtime);
      if (movie && movie.availableSeats > 0) {
        movie.availableSeats--;
        console.log(`Seat reserved for ${movieName} at ${showtime}`);
      } else {
        console.log(`No available seats for ${movieName} at ${showtime}`);
      }
    };
  
    this.purchaseTicket = function(movieName, showtime, ticketPrice) {
      let movie = this.movies.find(m => m.movieName === movieName && m.showtime === showtime);
      if (movie && movie.availableSeats > 0) {
        console.log(`Ticket purchased for ${movieName} at ${showtime} for $${ticketPrice}`);
        movie.availableSeats--;
      } else {
        console.log(`No available seats for ${movieName} at ${showtime}`);
      }
    };
  
    this.showSchedule = function() {
      console.log(`Current Schedule for ${this.theaterName} (${this.location}):`);
      this.movies.forEach(movie => {
        console.log(`- ${movie.movieName} (${movie.showtime}): ${movie.availableSeats} seats available`);
      });
    };
  }
  
  // Example usage:
  var regalCinema = new Theater("Regal Cinema", "Downtown");
  regalCinema.addMovie("Inception", "18:00", 100);
  regalCinema.reserveSeat("Inception", "18:00");
  regalCinema.purchaseTicket("Inception", "18:00", 15.00); // Assuming ticket costs $15
  regalCinema.showSchedule();
  