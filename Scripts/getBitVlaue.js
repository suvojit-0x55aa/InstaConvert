var app = {
    dataRequest : new XMLHttpRequest(),
    selectCurr : function()
    {
        this.selectedCurr = document.getElementById('currency')
        this.currValue = this.selectedCurr.options[this.selectedCurr.selectedIndex].value
        if (this.currValue === "inr")
        {
            this.dataRequest.open("GET","https://api.bitcoinaverage.com/ticker/global/INR/",false)
        }
        else if (this.currValue === "euro")
        {
            this.dataRequest.open("GET","https://api.bitcoinaverage.com/ticker/global/EUR/",false)
        }
        else if (this.currValue === "usd")
        {
            this.dataRequest.open("GET","https://api.bitcoinaverage.com/ticker/global/USD/",false)
        }
        else if (this.currValue === "yen")
        {
            this.dataRequest.open("GET","https://api.bitcoinaverage.com/ticker/global/JPY/",false)
        }
        else if (this.currValue === "gbp")
        {
            this.dataRequest.open("GET","https://api.bitcoinaverage.com/ticker/global/GBP/",false)
        }
        else if (this.currValue === "aud")
        {
            this.dataRequest.open("GET","https://api.bitcoinaverage.com/ticker/global/AUD/",false)
        }
    },
    getValue : function()
    {
        this.selectCurr()
        this.dataRequest.send()
        if (this.dataRequest.statusText === 'OK')
        {
            //if data is recieved
            this.parsedData = JSON.parse(this.dataRequest.responseText)
            //console.log(this.parsedData["24h_avg"])
            this.element = document.getElementById("para")
            this.entry = document.getElementById("entry")
            this.element.innerText = "Currently, " + this.entry.value + " BTC = "+(this.entry.value * this.parsedData["24h_avg"]).toFixed(2)+" "+this.selectedCurr.options[this.selectedCurr.selectedIndex].innerText
        }
    },
    instantChange : function()
    {
           this.element.innerText = "Currently, " + this.entry.value + " BTC = "+(this.entry.value * this.parsedData["24h_avg"]).toFixed(2)+" "+this.selectedCurr.options[this.selectedCurr.selectedIndex].innerText
    },
    retAdd : function()
    {
        this.selectedCurr = document.getElementById('currency')
        this.currValue = this.selectedCurr.options[this.selectedCurr.selectedIndex].value
        if (this.currValue === "inr")
        {
            var urlStr = "https://api.bitcoinaverage.com/history/INR/per_hour_monthly_sliding_window.csv"
        }
        else if (this.currValue === "euro")
        {
            var urlStr = "https://api.bitcoinaverage.com/history/EUR/per_hour_monthly_sliding_window.csv"
        }
        else if (this.currValue === "usd")
        {
            var urlStr = "https://api.bitcoinaverage.com/history/USD/per_hour_monthly_sliding_window.csv"
        }
        else if (this.currValue === "yen")
        {
            var urlStr = "https://api.bitcoinaverage.com/history/JPY/per_hour_monthly_sliding_window.csv"
        }
        else if (this.currValue === "gbp")
        {
            var urlStr = "https://api.bitcoinaverage.com/history/GBP/per_hour_monthly_sliding_window.csv"
        }
        else if (this.currValue === "aud")
        {
            var urlStr = "https://api.bitcoinaverage.com/history/AUD/per_hour_monthly_sliding_window.csv"
        }
        return urlStr
    },
    eventhandle : function()
    {
        
    },
     interval : setInterval(function()
                            {
                                app.getValue()                                
                            },5000)
     
}

