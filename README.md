Hotel Bookings
You are writing a script that simulates booking reservations in a hotel. Guests will be requesting to book with the following search criteria:
• Start/End dates
• Smoking vs non-smoking room
• Single or double bed

You will be provided a set of input json files (rooms.json, reservations json, and requests.json) that you should load up in your script. You can imagine rooms.json and reservations.json as the prior state of what rooms are available and what rooms are already booked and when.

Your task is to process the requests in requests.json one by one in the order provided, as if they were real time requests. Assign rooms to the requests and add them to the list of reservations. The contents of reservations.json contain the current reservations from prior requests to book (not provided). You must iterate through each requests.json in the order provided.

Note the following requirements (hopefully should be intuitive!):
• When a room is reserved, it cannot be reserved by another guest on overlapping dates.
• Whenever there are multiple available rooms for a request, assign the room with the lower final price.
• Whenever a guest requests a single, you may assign them to a double bed.

When a guest requests a double, however, you must assign them a double.
• Do not put smokers in non-smoking rooms
• Do not put non-smokers in smoking rooms

The final price in a reservation is simply determined by the following formula:
(daily_daily \* num_days) + cleaning_fee

You are also given a file answers.json to check your answer. The content of the json file is simply the full list of reservations, including the prior ones. You will find all the requests in requests.json will have a corresponding entry in there and your algorithm should generate the same output in the same order.

Please upload this submission in Github and send me the link. Also, make sure to answer the questions in the following page. You may use whatever software packages or dependencies you’d like. Feel free to reach out if you have any questions.

        <span className='smokingOption'>
          <a href='https://www.flaticon.com/free-icons/cigar' title='cigar icons'>
            Cigar icons created by Freepik - Flaticon
          </a>
        </span>
        <span className='smokingOption'>
          <a href='https://www.flaticon.com/free-icons/no-smoking' title='no smoking icons'>
            No smoking icons created by Triangle Squad - Flaticon

<a href="https://www.flaticon.com/free-icons/single-bed" title="single bed icons">Single bed icons created by Good Ware - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/bed" title="bed icons">Bed icons created by xnimrodx - Flaticon</a>
