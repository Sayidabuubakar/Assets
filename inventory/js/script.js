var sidebarOpen = false;
var sidebar = document.getElementById("sidebar"); // Ensure the ID matches your HTML

function openSideBar() {
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() { // Match the name exactly with the HTML
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}



/* chatrts bar charts*/

var barChart = {
          series: [{
          data: [400, 430, 448, 470, 1700]
        }],
          chart: {
          type: 'bar',
          height: 350,
          toolbar: {
            show: false
          },
        },
        colors: [
            "#008FFB",
            "#cc3c43",
            "#367952",
            "f5b74f",
            "#4f35a1"

        ],
        plotOptions: {
          bar: {
            distributed: true,
            borderRadius: 4,
          }
        },
        colors: [
            "#008FFB",
            "#cc3c43",
            "#367952",
            "f5b74f",
            "#4f35a1"

        ],
        plotOptions: {
          bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: '40%',
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            "laptop","phone","watch","camera","headphone"
          ],
        },
        yaxis: {
          title: {
            text: "count"
        }
    }
        };

        var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChart);
        barChart.render();


        // area chart
var areaChartoptions = {
          series: [{
          name: 'Purchase Orders',
          data: [44, 55, 31, 47, 31, 43, 26]
        }, {
          name: 'Sale Orders',
          data: [55, 69, 45, 61, 43, 54, 37]
        }],
          chart: {
          height: 350,
          type: 'area',
          toolbar: {
              show: false
          },
          colors: ['#6259ca', '#4754e2'],
          dataLabels: {
              enabled: false
          }
         
          
        },
        stroke: {
          curve: 'smooth'
        },
     
        labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul"],
        markers: {
          size: 0
        },
        yaxis: [
          {
            title: {
              text: 'Purchase Orders',
            },
          },
          {
            opposite: true,
            title: {
              text: 'Sale Orders',
            },
          },
        ],
        tooltip: {
          shared: true,
          intersect: false,
    
        }
        };

        var areaChartoptions = new ApexCharts(document.querySelector("#area-chart"), areaChartoptions);
        areaChartoptions.render();

      
      