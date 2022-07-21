from flask import Flask, make_response, request, jsonify
from flask_cors import CORS, cross_origin
import pullData
app = Flask("__name__")
CORS(app)



#@app.route('/<end point>', defaults={'<variable name>' : '<default value>'})


#API route
@app.route("/members", methods=["GET", "POST"])
# @cross_origin()
def members(): #json array
    args = request.args
    ticker = args.get("ticker")
    start = args.get("start")
    end = args.get("end")
    interval = args.get("interval")
    range = args.get("range")
    data = pullData.requestData(ticker, start, end, interval, range)
    return data

if __name__ == "__main__":
    app.run(debug = True)

# from flask import Flask, request, jsonify, make_response
# from models import OrderModel

# flask_app = Flask(__name__)

# @flask_app.route("/api/orders", methods=["POST", "OPTIONS"])
# def api_create_order():
#     if request.method == "OPTIONS": # CORS preflight
#         return _build_cors_preflight_response()
#     elif request.method == "POST": # The actual request following the preflight
#         order = OrderModel.create(...) # Whatever.
#         return _corsify_actual_response(jsonify(order.to_dict()))
#     else:
#         raise RuntimeError("Weird - don't know how to handle method {}".format(request.method))

# def _build_cors_preflight_response():
#     response = make_response()
#     response.headers.add("Access-Control-Allow-Origin", "*")
#     response.headers.add('Access-Control-Allow-Headers', "*")
#     response.headers.add('Access-Control-Allow-Methods', "*")
#     return response

# def _corsify_actual_response(response):
#     response.headers.add("Access-Control-Allow-Origin", "*")
#     return response

