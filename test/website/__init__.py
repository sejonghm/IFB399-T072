from flask import Flask, render_template, url_for, request, redirect

# Initialize the Flask app
app = Flask(__name__)



# Define a route for the homepage
@app.route('/')
def homepage():
    return render_template('homepage.html')

# Define a route for the products page
@app.route('/products')
def products():
    return render_template('product_page.html')

# Define other routes (about us, contact, etc.)
@app.route('/about')
def about():
    return render_template('aboutUs.html')

#event page
@app.route('/event')
def event():
    return render_template('event_details.html')

@app.route('/booking')
def booking():
    return render_template('booking_history.html')

@app.route('/contact')
def contact():
    return render_template('contactUs.html')

# @app.route('/request_quote')
# def request_quote():
#     return render_template('request_quote_page.html')

# Request quote page with form
@app.route('/request_quote', methods=['GET', 'POST'])
def request_quote():
    if request.method == 'POST':
        # Add logic to handle the form data, if necessary
        return redirect(url_for('requestsuccess'))
    return render_template('request_quote_page.html')

@app.route('/cart')
def cart():
    return render_template('cart page.html')

# @app.route('/payment')
# def payment():
#     return render_template('paymentpage.html')

@app.route('/payment', methods=['GET', 'POST'])
def payment():
    if request.method == 'POST':
        # Add logic to handle the form data, if necessary
        return redirect(url_for('success'))
    return render_template('paymentpage.html')

@app.route('/success')
def success():
    return render_template('Ordersuccesspage.html')

@app.route('/requestsuccess')
def requestsuccess():
    return render_template('requestsuccesspage.html')


# Define a route for the virtual room
@app.route('/virtual_room')
def virtual_room():
    return render_template('virtual_room.html')

# Check if the script is executed directly (and not imported), then run the app
if __name__ == '__main__':
    app.run(debug=True)
