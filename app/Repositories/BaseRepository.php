<?php

namespace App\Repositories;
use Illuminate\Database\Eloquent\Model;

abstract class BaseRepository
{
    /**
     * Model instance.
     *
     * @var \Illuminate\Database\Eloquent\Model
     */
    protected $model;

    /**
     * Create base repository instance.
     *
     * @return void
     */
    function __construct()
    {
        $this->model = app($this->getModelClass());
    }

    /**
     * Get model class.
     *
     * @return string
     */
    abstract protected function getModelClass(): string;

    /**
     * Clone model property before get data.
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    protected function start(): Model
    {
        return clone $this->model;
    }
}
