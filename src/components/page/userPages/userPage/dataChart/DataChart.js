// @flow
//>>> 以用戶的紀錄建立視覺化圖表
import * as React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';

const DataChart = ({ userState }: { userState: Object }): React.Node => {
	//PART> Data processing
	const records = userState.user.tables.records;
	// for Doughnut chart
	const recordTitles = records.map(item => item.location);
	const setLocation = [...new Set(recordTitles)];
	const achievementCount = setLocation.length;
	// for Line chart
	const lineChartData = [];
	records.forEach(item => {
		if (!lineChartData.length) {
			lineChartData.push({
				year: item.startDate.split('/')[0],
				count: 1,
			});
			return;
		}
		const searchResult = lineChartData.find(
			obj => obj.year === item.startDate.split('/')[0]
		);
		if (searchResult) {
			searchResult.count += 1;
			return;
		}
		lineChartData.push({ year: item.startDate.split('/')[0], count: 1 });
	});
	lineChartData.sort((prev, after) => prev.year - after.year);

	//PART> Chart settings
	const historicalRecordsData = {
		labels: lineChartData.map(item => item.year),
		datasets: [
			{
				label: '健行紀錄統計',
				backgroundColor: 'rgba(44,225,150,1)',
				borderColor: 'rgba(255, 99, 132, 0)',
				data: lineChartData.map(item => item.count),
				fill: true,
				tension: 0,
				pointBackgroundColor: 'rgba(255, 99, 132, 0)',
				pointHoverBackgroundColor: 'rgba(255, 99, 132, 0.7)',
				pointBorderWidth: 0,
			},
		],
	};

	const historicalRecordsOptions = {
		layout: {
			padding: 0,
		},
		responsive: true,
		plugins: {
			legend: {
				display: false,
				labels: {
					color: 'rgb(255, 99, 132)',
				},
			},
			tooltip: {
				usePointStyle: true,
				callbacks: {
					labelPointStyle: function(context) {
						return {
							pointStyle: 'triangle',
							rotation: 0,
							backGroundColor: '#000000',
						};
					},
					labelColor: function(context) {
						return {
							borderColor: 'rgba(44,225,150,1)',
							backgroundColor: 'rgba(44,225,150,1)',
						};
					},
					title: function(data) {
						if (!data[0].label) return '';
						return '年份：' + data[0].label;
					},
					label: function(context) {
						if (!context.parsed) return '';
						return ' 健行紀錄 ' + context.parsed.y + ' 筆';
					},
				},
			},
		},
		scales: {
			y: {
				min: 0,
				grid: {
					borderDash: [8, 8],
				},
				ticks: {
					stepSize: 1,
				},
			},
			x: {
				grid: {
					display: false,
				},
			},
		},
	};
	const achievementRateData = {
		labels: ['已完成', '未達成'],
		datasets: [
			{
				label: '百岳達成率',
				data: [achievementCount, 100 - achievementCount],
				backgroundColor: [
					'rgba(44,225,150,1)',
					'rgba(244,244,244,0.5)',
				],
				borderWidth: 0,
			},
		],
	};
	const achievementRateOptions = {
		cutout: '70%',
		plugins: {
			legend: { display: false },
			tooltip: {
				callbacks: {
					label: function(context) {
						if (!context.parsed) return '';
						return context.label + ' ' + context.parsed + ' 座';
					},
				},
			},
		},
	};
	return (
		<div className={`py-10 mt-10 px-3 bg-white rounded-sm`}>
			<h4 className={`text-center text-md mb-5`}>歷年健行紀錄統計</h4>
			<div className={`mb-14`}>
				<Line
					data={historicalRecordsData}
					options={historicalRecordsOptions}
					id={`user_data_chart_1`}
				/>
			</div>

			<h4 className={`text-center text-md mb-5`}>百岳達成率</h4>
			<div className={`relative px-10`}>
				<p
					className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
				>
					<span className={`text-3xl`}>{achievementCount}</span>
					<span className={`font-medium text-sm`}> / 100</span>
				</p>
				<Doughnut
					data={achievementRateData}
					options={achievementRateOptions}
					className={`relative`}
				/>
			</div>
		</div>
	);
};

export default DataChart;
