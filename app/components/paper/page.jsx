import { Grid } from '@mui/material'
import React from 'react'

export default function page(props) {

    return (
        <div>
            <Grid container className='flex gap-10 justify-center'>
                <Grid item xs={12} lg={10.8}>
                    <h1 className='font-bold text-2xl my-4'  style={{ color: "rgb(30, 65, 100)" }}>
                        {props.h1}
                    </h1>
                    <p className='text-gray-500 mb-3'>{props.results ? `${props.results}  Results Available` : undefined} </p>
                </Grid>
            </Grid>

            <Grid container className='flex gap-10 justify-center'>
                {
                    props.data.map((item, index) => {

                        return (
                            <Grid
                                item
                                xs={12}
                                md={2.5}
                                lg={item.round === "full" ? 2.4 : 1.5}
                                key={index}
                                className="border cursor-pointer flex gap-3 p-4 flex-col rounded-lg justify-center items-center"
                                style={{ borderColor: "#ccc" }}
                            >
                                <img
                                    src={item.img}
                                    alt="..."
                                    style={{
                                        borderWidth: item.round === "full" ? "10px" : undefined,
                                        borderColor: "#f2f2f2",
                                        width: `${item.width}px`,
                                        height: `${item.width}px`,
                                        borderRadius: item.round === "full" ? "50%" : `${item.round}px`
                                    }}
                                    className={`m-auto ${item.round === "full" ? "border" : undefined}`}
                                />
                                <p className="text-center font-bold">{item.title}</p>
                                <p className="text-center text-gray-500"><span>{item.number}</span> <span>{item.compounds}</span></p>
                                <p className="text-center text-gray-500"><span>{item.number2}</span> <span>{item.text2}</span></p>

                            </Grid>

                        )
                    })
                }
            </Grid>

        </div>
    )
}