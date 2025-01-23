import { Card } from "../ui/card";

export function RiskSummary() {
    return (
      <Card className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Risk Summary
        </h2>
        <table className="w-full text-sm text-gray-600">
          <thead className="text-gray-500 bg-gray-50">
            <tr>
              <th className="px-4 py-2">Asset</th>
              <th className="px-4 py-2">Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2">Asset 1</td>
              <td className="px-4 py-2 text-red-500">Critical</td>
            </tr>
          </tbody>
        </table>
      </Card>
    );
  }
  