import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      rates: [],
      money: 0,
      selectedRate: 0,
      convertToEuro: 0,
      nonEuro: 0
    },

    mounted(){
      this.exchangeRates()
    },
    computed: {
      getExchangeValue: function(){
        return this.money * this.selectedRate
      },
      getEuroValue: function(){
        return this.nonEuro / this.convertToEuro
      }
    },
    methods: {
      exchangeRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(rates => this.rates = rates.rates)
      }
    }
  })
})
