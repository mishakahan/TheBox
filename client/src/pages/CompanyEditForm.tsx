import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface CompanyEditFormProps {
  setCurrentPage: (page: string) => void;
}

const CompanyEditForm: React.FC<CompanyEditFormProps> = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    company_name: "FLiPO Eyewear",
    sector: "Consumer Goods / Eyewear",
    target_clients: "Urban Millennials in Europe seeking versatile and sustainable eyewear solutions",
    resources: "Innovative eyewear designs with interchangeable lenses and clip-on accessories",
    strategic_priorities: "Enhance product versatility and user convenience; expand market presence; leverage social media"
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setCurrentPage('dashboard');
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Edit Company Information</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            {showSuccess && (
              <Alert className="bg-green-50 text-green-800 mb-4">
                <AlertDescription>
                  Company information updated successfully!
                </AlertDescription>
              </Alert>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sector
                </label>
                <input
                  type="text"
                  name="sector"
                  value={formData.sector}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Target Clients
                </label>
                <textarea
                  name="target_clients"
                  value={formData.target_clients}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md h-24"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resources
                </label>
                <textarea
                  name="resources"
                  value={formData.resources}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md h-24"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Strategic Priorities
                </label>
                <textarea
                  name="strategic_priorities"
                  value={formData.strategic_priorities}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md h-24"
                  required
                />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentPage('dashboard')}
            >
              Cancel
            </Button>
            <Button type="submit">
              Save Changes
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default CompanyEditForm;