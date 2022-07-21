from pandas_datareader import data as pdr
import yfinance as yf
import json
import datetime

yf.pdr_override() # pandas utility (dataframe) override for array formatting



#Not that sophisicated, but should work for basic formatting
def checkString(date_string):
    try:
        if "-" in date_string[0:4]:
            return False
        elif int(date_string[4:6]) > 12:
            return False
        elif int(date_string[7:9]) > 31:
            return False
        return True
    except Exception as E:
        print(E)
        return False

#ticker : string
#start : string <YYYY-MM-DD>
#end : string <YYYY-MM-DD>

def requestData(ticker, start, end, interval, range):
    print("[DEBUG] ",ticker)

    start = str(datetime.datetime.fromtimestamp(int(start))).split(" ")[0]
    end = str(datetime.datetime.fromtimestamp(int(end))).split(" ")[0]
    print("[DEBUG] Start Date:",start)
    print("[DEBUG] Start Date:",end)

    start, end = str(start), str(end)
    if not checkString(start):
        print("[ERROR]: String format is incorrect for start date:",start)
    if not checkString(end):
        print("[ERROR]: String format is incorrect for end date:",end)
    
    
    data = pdr.get_data_yahoo(str(ticker), interval = str(interval), period=range)#, interval=str(interval) + "d", range=range)
    data = data.to_json()
    # print(data)
    return data



#upon initial stock call: stock ticker, standard lower and upperbounds
#upon refresh .. lower and upperbounds.. and every second with no refresh... the day, return the very latest columns 

#send back the data frame requested





#watch list functionality will require a constant refresh from the api. This will work

# data = yf.download(  # or pdr.get_data_yahoo(...
#         # tickers list or string as well
#         tickers = "SPY AAPL MSFT",

#         # use "period" instead of start/end
#         # valid periods: 1d,5d,1mo,3mo,6mo,1y,2y,5y,10y,ytd,max
#         # (optional, default is '1mo')
#         period = "ytd",

#         # fetch data by interval (including intraday if period < 60 days)
#         # valid intervals: 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo
#         # (optional, default is '1d')
#         interval = "1m",

#         # group by ticker (to access via data['SPY'])
#         # (optional, default is 'column')
#         group_by = 'ticker',

#         # adjust all OHLC automatically
#         # (optional, default is False)
#         auto_adjust = True,

#         # download pre/post regular market hours data
#         # (optional, default is False)
#         prepost = True,

#         # use threads for mass downloading? (True/False/Integer)
#         # (optional, default is True)
#         threads = True,

#         # proxy URL scheme use use when downloading?
#         # (optional, default is None)
#         proxy = None
#     )
