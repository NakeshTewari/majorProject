import React from 'react'

const RecordTable = () => {
  return (
    
    <div className="overflow-x-auto scrollbar-thin rounded-md border border-gray-200">
    <table className="min-w-full text-left text-xs font-normal text-gray-700">
      <thead className="bg-gray-50 border-b border-gray-200">
        <tr>
          <th className="px-3 py-2 w-36 font-semibold text-gray-600">Date</th>
          <th className="px-3 py-2 w-12 font-semibold text-gray-600">Status</th>
          <th className="px-3 py-2 w-12 font-semibold text-gray-600">Method</th>
          <th className="px-3 py-2 font-semibold text-gray-600">Rule</th>
          <th className="px-3 py-2 font-semibold text-gray-600">Url</th>
          <th className="px-3 py-2 w-36 font-semibold text-gray-600">User -Agent</th>
        </tr>
      </thead>
      <tbody>
        {/* Sample data rows */}
        {[
          {
            date: 'Mar 29, 21:49:09',
            status: '484',
            method: 'GET',
            rule: 'https://example.com/assistance/sed-eum-quis-qui-fugit-quia-quibusdam',
            url: 'https://example.com/assistance/sed-eum-quis-qui-fugit-quia-quibusdam',
            userAgent: 'Opera',
          },
          {
            date: 'Mar 29, 21:49:02',
            status: '500',
            method: 'GET',
            rule: 'https://example.com/products/Sporting-Goods/Athletics/Volleyball/Volleyball',
            url: 'https://example.com/products/Sporting-Goods/Athletics/Volleyball/Volleyball',
            userAgent: 'Internet Explorer',
          },
          {
            "date": "Mar 30, 10:15:00",
            "status": "200",
            "method": "POST",
            "rule": "https://example.com/assistance/novum-velit-quis-quam-velit-nihil",
            "url": "https://example.com/assistance/novum-velit-quis-quam-velit-nihil",
            "userAgent": "Firefox"
        },
        {
            "date": "Mar 30, 10:15:00",
            "status": "201",
            "method": "PUT",
            "rule": "https://example.com/assistance/creatio-qui-velit-nihil-velit",
            "url": "https://example.com/assistance/creatio-qui-velit-nihil-velit",
            "userAgent": "Chrome"
        },
        {
            "date": "Mar 30, 10:15:00",
            "status": "403",
            "method": "DELETE",
            "rule": "https://example.com/assistance/ut-velit-qui-quis-non",
            "url": "https://example.com/assistance/ut-velit-qui-quis-non",
            "userAgent": "Safari"
        },
        {
            "date": "Mar 30, 10:15:00",
            "status": "500",
            "method": "PATCH",
            "rule": "https://example.com/assistance/est-velit-qui-quis-aliquid",
            "url": "https://example.com/assistance/est-velit-qui-quis-aliquid",
            "userAgent": "Edge"
        },
        {
            "date": "Mar 30, 10:15:00",
            "status": "408",
            "method": "OPTIONS",
            "rule": "https://example.com/assistance/temporibus-qui-velit-aliquid",
            "url": "https://example.com/assistance/temporibus-qui-velit-aliquid",
            "userAgent": "Opera"
        },
          // Add more rows as needed
        ].map((record, index) => (
          <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
            <td className="px-3 py-2 text-gray-500">{record.date}</td>
            <td className="px-3 py-2">
            <span className={`inline-block rounded px-2 py-0.5 text-[10px] font-semibold 
${record.status === '200' ? 'text-white bg-green-600' : 
record.status === '201' ? 'text-white bg-blue-600' : 
record.status === '400' ? 'text-white bg-yellow-600' : 
record.status === '403' ? 'text-white bg-orange-600' : 
record.status === '404' ? 'text-white bg-red-500' : 
record.status === '500' ? 'text-white bg-red-600' : 
'text-red-700 bg-red-100'}
`}>
{record.status}
</span>
            </td>
            <td className="px-3 py-2 font-semibold">{record.method}</td>
            <td className="px-3 py-2 truncate max-w-[120px]">{record.rule}</td>
            <td className="px-3 py-2 truncate max-w-[400px]">{record.url}</td>
            <td className="px-3 py-2 font-semibold">{record.userAgent}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default RecordTable
