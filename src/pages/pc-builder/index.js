import Link from "next/link";
import { RootLayout } from "../../components/Layout/RootLayout";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { buildSuccess } from "@/redux/features/pc-builder/pcBuilderSlice";

const PcBuilder = () => {
  const data = useSelector((state) => state.pcBuilder);
  const dispatch = useDispatch();
  const router = useRouter();
  const completeBuild = () => {
    toast.success("Build Complete");
    dispatch(buildSuccess());
    router.push("/");
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Component</th>
              <th>Name</th>
              <th>Price</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>CPU</td>
              {data.cpu ? (
                <>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            src={data?.cpu?.image}
                            height={50}
                            width={50}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data.cpu.name}</div>
                        <div className="text-sm opacity-50">
                          {data.cpu.status}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{data.cpu.price}</td>
                </>
              ) : (
                ""
              )}
              <th>
                <Link href={"/select-part/Processor"}>
                  {" "}
                  <button className="btn btn-ghost btn-xs">Click to Add</button>
                </Link>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>RAM</td>
              {data.ram ? (
                <>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            src={data?.ram?.image}
                            height={50}
                            width={50}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data.ram.name}</div>
                        <div className="text-sm opacity-50">
                          {data?.ram?.status}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{data.ram.price}</td>
                </>
              ) : (
                ""
              )}
              <th>
                <Link href={"/select-part/ram"}>
                  {" "}
                  <button className="btn btn-ghost btn-xs">Click to Add</button>
                </Link>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <td>Motherboard</td>
              {data.motherboard ? (
                <>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            src={data?.motherboard?.image}
                            height={50}
                            width={50}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data.motherboard.name}</div>
                        <div className="text-sm opacity-50">
                          {data?.motherboard?.status}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{data.motherboard.price}</td>
                </>
              ) : (
                ""
              )}
              <th>
                <Link href={"/select-part/Motherboard"}>
                  {" "}
                  <button className="btn btn-ghost btn-xs">Click to Add</button>
                </Link>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>Power Supply</td>
              {data.power_supply ? (
                <>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            src={data?.power_supply?.image}
                            height={50}
                            width={50}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {data.power_supply.name}
                        </div>
                        <div className="text-sm opacity-50">
                          {data?.power_supply?.status}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{data.power_supply.price}</td>
                </>
              ) : (
                ""
              )}
              <th>
                <Link href={"/select-part/power-supply"}>
                  {" "}
                  <button className="btn btn-ghost btn-xs">Click to Add</button>
                </Link>
              </th>
            </tr>
            {/* 5.5 */}
            <tr>
              <td>Monitor</td>
              {data.monitor ? (
                <>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            src={data?.monitor?.image}
                            height={50}
                            width={50}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data.monitor.name}</div>
                        <div className="text-sm opacity-50">
                          {data?.monitor?.status}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{data.monitor.price}</td>
                </>
              ) : (
                ""
              )}
              <th>
                <Link href={"/select-part/monitor"}>
                  {" "}
                  <button className="btn btn-ghost btn-xs">Click to Add</button>
                </Link>
              </th>
            </tr>
            {/* 5 */}
            <tr>
              <td>Storage Device</td>
              {data.storage_device ? (
                <>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            src={data?.storage_device?.image}
                            height={50}
                            width={50}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {data.storage_device.name}
                        </div>
                        <div className="text-sm opacity-50">
                          {data?.storage_device?.status}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{data.storage_device.price}</td>
                </>
              ) : (
                ""
              )}
              <th>
                <Link href={"/select-part/storage-device"}>
                  {" "}
                  <button className="btn btn-ghost btn-xs">Click to Add</button>
                </Link>
              </th>
            </tr>
            {/* 6 */}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Total</th>
              <th className="font-bold">{data.subtotal.total}</th>

              <th>
                <button
                  className="btn btn-primary btn-xs"
                  onClick={() => completeBuild()}
                  disabled={data.subtotal.itemsSelected <= 5}
                >
                  Complete Build
                </button>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
