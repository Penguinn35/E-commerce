import { useEffect, useState } from "react";
import {motion} from "framer-motion";
import axios from "../lib/axios.js"
import { Users, Package, ShoppingCart, DollarSign } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

import LoadingSpinner from "./loadingSpinner.jsx";



const AnalyticsTab = () => {
  const [analyticsData, setAnalyticsData] = useState({
      users: 0,
      products: 0,
      totalSales: 0,
      totalRevenue: 0
    });
    const [isLoading, setIsLoading] = useState(true);
    const [dailySalesData, setDailySalesData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
			try {
				const response = await axios.get("/analytics");
				setAnalyticsData(response.data.analyticsData);
				setDailySalesData(response.data.dailySalesData);
			} catch (error) {
				console.error("Error fetching analytics data:", error);
			} finally {
				setIsLoading(false);
			}
		};

      fetchData();
      console.log("data 1: ",analyticsData  );
      console.log("data 2: ",dailySalesData  );
    },[]);

    if(isLoading)
      return (
    <LoadingSpinner/>
      );
  return (
    <div className='max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
				<AnalyticsCard
					title='Users'
					value={analyticsData.users.toLocaleString()}
					icon={Users}
					color='from-emerald-500 to-teal-700'
				/>
				<AnalyticsCard
					title='Sản phẩm'
					value={analyticsData.products.toLocaleString()}
					icon={Package}
					color='from-emerald-500 to-green-700'
				/>
				<AnalyticsCard
					title='Doanh số'
					value={analyticsData.totalSales.toLocaleString()}
					icon={ShoppingCart}
					color='from-emerald-500 to-cyan-700'
				/>
				<AnalyticsCard
					title='Doanh thu'
					value={`${analyticsData.totalRevenue.toLocaleString()} vnđ`}
					icon={DollarSign}
					color='from-emerald-500 to-lime-700'
				/>
			</div>
			<motion.div
				className='bg-orange-100 rounded-lg p-6 shadow-lg'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.25 }}
			>
				<ResponsiveContainer width='100%' height={400}>
					<LineChart data={dailySalesData}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' stroke='#10B981' />
						<YAxis yAxisId='left' stroke='#10B981' />
						<YAxis yAxisId='right' orientation='right' stroke='#10B981' />
						<Tooltip />
						<Legend />
						<Line
							yAxisId='left'
							type='monotone'
							dataKey='sales'
							stroke='#10B981'
							activeDot={{ r: 8 }}
							name='Doanh số'
						/>
						<Line
							yAxisId='right'
							type='monotone'
							dataKey='revenue'
							stroke='#3B82F6'
							activeDot={{ r: 8 }}
							name='Doanh thu'
						/>
					</LineChart>
				</ResponsiveContainer>
			</motion.div>
		</div>
	);
  
};

export default AnalyticsTab;


const AnalyticsCard = ({title, value, icon: Icon, color}) => (
<motion.div
		className={`bg-yellow-800 rounded-lg p-6 shadow-lg overflow-hidden relative ${color}`}
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
	>
		<div className='flex justify-between items-center'>
			<div className='z-10'>
				<p className='text-yellow-300  mb-1 font-semibold text-xl'>{title}</p>
				<h3 className='text-white text-3xl font-bold'>{value}</h3>
			</div>
		</div>
		<div className='absolute inset-0 bg-gradient-to-br from-yellow-600 to-yellow-900 opacity-30' />
		<div className='absolute -bottom-4 -right-4 text-orange-700 opacity-50'>
			<Icon className='h-32 w-32' />
		</div>
	</motion.div>
);