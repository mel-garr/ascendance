"use client"

import { useState } from "react"
import { FaCar, FaPalette, FaCog } from "react-icons/fa" // Removed FaBolt

type VehicleOptions = {
  color: string
  driveSystem: string
  battery: string
  windowType: boolean
  interior: string
  roof: boolean
  glassType: string
  dashcam: boolean
  climate: string
  aiAssist: string
}

export default function VehicleConfigurator() {
  const [selectedOptions, setSelectedOptions] = useState<VehicleOptions>({
    color: "Midnight Black",
    driveSystem: "1 Wheel Drive",
    battery: "5kWh",
    windowType: false, // false = manual, true = auto
    interior: "Classic",
    roof: false, // false = normal, true = glass
    glassType: "Normal",
    dashcam: false,
    climate: "None",
    aiAssist: "None",
  })

  const updateOption = <K extends keyof VehicleOptions>(key: K, value: VehicleOptions[K]) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const colors = ["Midnight Black", "Pearl White", "Deep Blue Metallic", "Silver Metallic", "Red Multi-Coat"]
  const driveSystems = ["1 Wheel Drive", "2 Wheel Drive", "3 Wheel Drive"]
  const batteries = ["5kWh", "10kWh", "15kWh"]
  const interiors = ["Classic", "Premium"]
  const glassTypes = ["Normal", "Black Tint", "Silver Tint"]
  const climates = ["None", "Air Conditioner", "Heated Seats"]
  const aiOptions = ["None", "Premium"]

  return (
    <div className="min-h-screen bg-base-200 p-4">
      <div className="grid grid-cols-12 gap-4">
        {/* Config Panel */}
        <div className="col-span-12 lg:col-span-3 space-y-4 overflow-y-auto max-h-screen p-2">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body space-y-4">
              <h2 className="card-title flex items-center gap-2">
                <FaCar /> Configure Vehicle
              </h2>

              {/* Colors */}
              <div>
                <p className="font-semibold">Color</p>
                <div className="flex flex-wrap gap-2">
                  {colors.map((c) => (
                    <button
                      key={c}
                      className={`btn btn-sm ${selectedOptions.color === c ? "btn-primary" : "btn-outline"}`}
                      onClick={() => updateOption("color", c)}
                    >
                      <FaPalette /> {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Drive System */}
              <div>
                <p className="font-semibold">Drive System</p>
                <select
                  className="select select-bordered w-full"
                  value={selectedOptions.driveSystem}
                  onChange={(e) => updateOption("driveSystem", e.target.value)}
                >
                  {driveSystems.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>

              {/* Battery */}
              <div>
                <p className="font-semibold">Battery Capacity</p>
                <select
                  className="select select-bordered w-full"
                  value={selectedOptions.battery}
                  onChange={(e) => updateOption("battery", e.target.value)}
                >
                  {batteries.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Window Type Switch */}
              <div className="flex items-center justify-between">
                <span className="font-semibold">Auto Windows</span>
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={selectedOptions.windowType}
                  onChange={(e) => updateOption("windowType", e.target.checked)}
                />
              </div>

              {/* Interior */}
              <div>
                <p className="font-semibold">Interior</p>
                <select
                  className="select select-bordered w-full"
                  value={selectedOptions.interior}
                  onChange={(e) => updateOption("interior", e.target.value)}
                >
                  {interiors.map((i) => (
                    <option key={i}>{i}</option>
                  ))}
                </select>
              </div>

              {/* Roof Switch */}
              <div className="flex items-center justify-between">
                <span className="font-semibold">Glass Roof</span>
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={selectedOptions.roof}
                  onChange={(e) => updateOption("roof", e.target.checked)}
                />
              </div>

              {/* Glass Type */}
              <div>
                <p className="font-semibold">Glass Type</p>
                <select
                  className="select select-bordered w-full"
                  value={selectedOptions.glassType}
                  onChange={(e) => updateOption("glassType", e.target.value)}
                >
                  {glassTypes.map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>

              {/* Dashcam */}
              <div className="flex items-center justify-between">
                <span className="font-semibold">Dashcam</span>
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={selectedOptions.dashcam}
                  onChange={(e) => updateOption("dashcam", e.target.checked)}
                />
              </div>

              {/* Climate */}
              <div>
                <p className="font-semibold">Climate</p>
                <select
                  className="select select-bordered w-full"
                  value={selectedOptions.climate}
                  onChange={(e) => updateOption("climate", e.target.value)}
                >
                  {climates.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* AI Assist */}
              <div>
                <p className="font-semibold">Drive AI Assist</p>
                <select
                  className="select select-bordered w-full"
                  value={selectedOptions.aiAssist}
                  onChange={(e) => updateOption("aiAssist", e.target.value)}
                >
                  {aiOptions.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
          <div className="card bg-base-100 shadow-lg w-full h-[70vh] flex items-center justify-center">
            <FaCar className="text-9xl text-primary" />
            <p className="mt-4 text-lg">Preview 3D Vehicle (placeholder)</p>
          </div>
        </div>

        {/* Summary */}
        <div className="col-span-12 lg:col-span-3">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title flex items-center gap-2">
                <FaCog /> Summary
              </h2>
              <ul className="space-y-2">
                {Object.entries(selectedOptions).map(([k, v]) => (
                  <li key={k} className="flex justify-between">
                    <span className="capitalize">{k}</span>
                    <span className="badge badge-primary badge-outline">
                      {typeof v === "boolean" ? (v ? "Yes" : "No") : v}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="divider"></div>
              <p className="text-lg font-bold">Estimated Price: $89,990</p>
              <button className="btn btn-primary w-full mt-2">Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
